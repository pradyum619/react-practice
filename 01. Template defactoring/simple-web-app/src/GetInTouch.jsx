import React from "react";
import Card from "./Card";

export default function GetInTouch() {
  return (
    <>
      {/* <!-- get in touch section --> */}
      <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">We love new friends!</h2>
          <div className="row">
            <div className="col-4">
              <Card
                title="MERA MULK"
                desc="Mera Mulk Mera Desh Mera ye Watan... Shanti ka Unnati ka Pyaarka chaman.."
              />
            </div>
            <div className="col-4">
              <Card
                title="MERA MULK"
                desc="Mera Mulk Mera Desh Mera ye Watan... Shanti ka Unnati ka Pyaarka chaman.."
              />
            </div>
            <div className="col-4">
              <Card
                title="MERA MULK"
                desc="Mera Mulk Mera Desh Mera ye Watan... Shanti ka Unnati ka Pyaarka chaman.."
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- get in touch section ends --> */}
    </>
  );
}
