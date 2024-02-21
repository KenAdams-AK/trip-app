import { Dispatch, SetStateAction, useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Cities, citiesData } from "@/mocks/citiesData";

import { Trip } from "@/models/trip";

import { useModalContext } from "@/hooks/useModalContext";

import { FormError } from "@/layout/FormError/FormError";

import { FORM_ERRORS, FormFields, schema } from "./formSchema";

import "./AddTripForm.scss";

type AddTripFormProps = {
  trips: Trip[];
  setTrips: Dispatch<SetStateAction<Trip[]>>;
};

export function AddTripForm({ trips, setTrips }: AddTripFormProps) {
  const { setIsOpen } = useModalContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError,
  } = useForm<FormFields>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const newTrip: Trip = {
        ...data,
        id: new Date().getTime(),
        destination: {
          city: data.destination as Cities,
          image: citiesData[data.destination as Cities],
        },
      };
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      setTrips([...trips, newTrip]);
      setIsOpen(false);
    } catch (error) {
      setError("root", {
        message: FORM_ERRORS.root,
      });
    }
  };

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div className="add-trip-form">
      <div className="add-trip-form__head">
        <h2 className="add-trip-form__title">Create trip</h2>
        <button
          className="add-trip-form__close-button"
          type="button"
          onClick={closeModal}
        >
          &times;
        </button>
      </div>

      <hr />

      <form
        className="add-trip-form__form form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="form__fieldset">
          <label htmlFor="destination">
            City
            <select
              id="destination"
              className={errors.destination ? "invalid" : ""}
              aria-invalid={errors.destination ? "true" : "false"}
              {...register("destination")}
            >
              <option value="">--Please choose a city--</option>
              {Object.keys(citiesData).map((city) => (
                <option key={city} value={city} aria-label={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.destination && (
              <FormError error={errors.destination.message ?? ""} />
            )}
          </label>

          <label htmlFor="departureDate">
            Start Date
            <input
              className={errors.departureDate ? "invalid" : ""}
              type="date"
              required // should be "required" to fix placeholder color
              aria-invalid={errors.departureDate ? "true" : "false"}
              {...register("departureDate")}
            />
            {errors.departureDate && (
              <FormError error={errors.departureDate.message ?? ""} />
            )}
          </label>

          <label htmlFor="returnDate">
            End Date
            <input
              className={errors.returnDate ? "invalid" : ""}
              type="date"
              required // SAB
              aria-invalid={errors.returnDate ? "true" : "false"}
              {...register("returnDate")}
            />
            {errors.returnDate && (
              <FormError error={errors.returnDate.message ?? ""} />
            )}
          </label>
        </fieldset>

        <hr />

        <div className="form__controls">
          <button
            className="form__button form__button--cancel"
            type="button"
            disabled={isSubmitting}
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="form__button form__button--submit"
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Save"}
          </button>
        </div>

        {errors.root && <FormError error={errors.root.message ?? ""} />}
      </form>
    </div>
  );
}
