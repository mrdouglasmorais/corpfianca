import Contact5 from "@/components/sections/contacts/Contact5";
import ContactTop from "@/components/sections/contacts/ContactTop";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";

const ContactMain = () => {
	return (
		<main>
			<HeroInner title={"Contact"} text={"Contact"} />
			<ContactTop />
			<Contact5 />
			<Cta1 />
		</main>
	);
};

export default ContactMain;
