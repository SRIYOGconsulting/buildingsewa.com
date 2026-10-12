import { services, type Service } from "@/data/services";

export async function getServices(): Promise<Service[]> {
  return services;
}

export async function getServiceBySlug(
  slug: string
): Promise<Service | undefined> {
  return services.find((service) => service.slug === slug);
}

export type BookingRequest = {
  serviceSlug: string;
  name: string;
  phone: string;
  email?: string;
  address: string;
  preferredDate: string;
  notes?: string;
};

export async function bookService(
  booking: BookingRequest
): Promise<{ success: boolean; message: string }> {
  console.log("Mock booking:", booking);

  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    message: "Your booking request has been submitted successfully.",
  };
}