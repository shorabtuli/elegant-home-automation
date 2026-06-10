const services = [
  "Smart Home Automation",
  "Home Wi-Fi & Networking",
  "Security Cameras",
  "Smart Lighting",
  "Motorized Shades",
  "Home Theater",
  "Audio Video",
  "Networking & Wi-Fi",
  "Managed Support",
  "Not sure yet"
];

export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-lg border border-ink/10 bg-white p-5 shadow-soft sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink/70">First name<input className="field" name="first_name" autoComplete="given-name" placeholder="First name" /></label>
        <label className="grid gap-2 text-sm font-medium text-ink/70">Last name<input className="field" name="last_name" autoComplete="family-name" placeholder="Last name" /></label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink/70">Email<input className="field" type="email" name="email" autoComplete="email" placeholder="you@example.com" /></label>
        <label className="grid gap-2 text-sm font-medium text-ink/70">Phone<input className="field" name="phone" autoComplete="tel" placeholder="[PHONE]" /></label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink/70">City<input className="field" name="city" autoComplete="address-level2" placeholder="Irvine, Newport Beach, etc." /></label>
        <label className="grid gap-2 text-sm font-medium text-ink/70">
          Service type
          <select className="field" name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((service) => <option key={service}>{service}</option>)}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-ink/70">
        Message
        <textarea className="field min-h-36 resize-y" name="description" placeholder="Tell us what you want to improve, what is frustrating today, and where the home is located." />
      </label>
      <button type="button" className="button-primary w-full sm:w-fit">Submit</button>
    </form>
  );
}
