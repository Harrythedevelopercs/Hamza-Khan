import { Container, QrContainer, Together, ProfileContainer, ServicesOffer, Resume, ProfileInformation, AboutContainer, Qualification } from "./components";


export default function Home() {
  return (
    <section >
      <div className="my-10">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            {/* FIRST FOLD */}

            <div className="xs:col-span-12 md:col-span-6 bg-[#0F0F0F] ">
              <ProfileInformation />
            </div>
            <div className="xs:col-span-12 md:col-span-6 bg-[#0F0F0F]">
              <AboutContainer />
            </div>

            {/* SECOND FOLD */}

            <div className="xs:col-span-4 md:col-span-3 bg-[#0F0F0F] group">
              <Resume />
            </div>
            <div className="xs:col-span-8 md:col-span-6 bg-[#0F0F0F]">
              <ServicesOffer />
            </div>
            <div className="xs:col-span-4 md:col-span-3 bg-[#0F0F0F]">
              <ProfileContainer />
            </div>
            <div className="xs:col-span-8 md:col-span-6 bg-[#0F0F0F]">
              <Container />
            </div>
            <div className="col-span-8 md:col-span-4 bg-[#0F0F0F] group">
              <Together />
            </div>
            <div className="col-span-4 md:col-span-2 bg-[#0F0F0F]">
              <QrContainer />
            </div>
            <div className="col-span-8 md:col-span-8 bg-[#0F0F0F] group">
              <Qualification />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
