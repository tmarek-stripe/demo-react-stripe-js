import FormField from "./FormField";

const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="Jane Doe"
        datacy="name"
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="jane.doe@example.com"
        datacy="email"
        required
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="185 Berry St. Suite 550"
        datacy="address"
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="San Francisco"
        datacy="city"
        required
      />
      <FormField
        name="state"
        label="State"
        type="text"
        placeholder="California"
        datacy="state"
        required
      />
      <FormField
        name="zip"
        label="ZIP"
        type="text"
        placeholder="94103"
        datacy="zip"
        required
      />
    </>
  );
};

export default BillingDetailsFields;
