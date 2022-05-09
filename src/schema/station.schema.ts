import { object, number, string, boolean, array, TypeOf } from "zod";

const payload = {
  body: object({
    name: string({
      required_error: 'Name is required',
    }),
    address: string({
      required_error: 'address is required',
    }),
    city: string({
      required_error: 'City is required',
    }),
    latitude: number({
      required_error: 'Latitude is required',
    }),
    longitude: number({
      required_error: 'Longitude is required',
    }),
    pumps: array(
      object({
        fuel_type: string({
          required_error: 'Fuel_type is required',
        }),
        price: number({
          required_error: 'Price is required',
        }),
        available: boolean({
          required_error: 'Available is required',
        }),
      })
    , {
      required_error: 'Pumps is required',
      invalid_type_error: "Pumps should be an array"
    }),
  }),
};

const params = {
  params: object({
    id: string({
      required_error: 'Station "id" is required',
    }),
  }),
};

export const createStationSchema = object({
  ...payload,
});

export const updateStationSchema = object({
  ...payload,
  ...params,
});

export const deleteStationSchema = object({
  ...params,
});

export const getStationSchema = object({
 
});

export type CreateStationInput = TypeOf<typeof createStationSchema>;
export type UpdateStationInput = TypeOf<typeof updateStationSchema>;
export type ReadStationInput = TypeOf<typeof getStationSchema>;
export type DeleteStationInput = TypeOf<typeof deleteStationSchema>;
