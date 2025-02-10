import Image from "next/image";
import album1 from "/public/image/album1.jpg";
import album2 from "/public/image/album2.jpg";
import album3 from "/public/image/album3.jpg";
import album4 from "/public/image/album4.jpg";
export default function Featured() {
  return (
    <div className="my-5 container-sm mx-auto">
      <h1>New Tracks</h1>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 my-2">
          <Image className="banner w-100" alt="album1" src={album1} />
          <div className="d-flex mt-3" style={{ alignItems: "center" }}>
            <div>
              <p>Tunnel episode 10</p>
              <p style={{ color: "gray" }}>podcast by Dj Leo</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 my-2">
          <Image className="banner w-100" alt="album2" src={album2} />
          <div className="d-flex mt-3" style={{ alignItems: "center" }}>
            <div>
              <p>Tunnel episode 10</p>
              <p style={{ color: "gray" }}>podcast by Dj Leo</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 my-2">
          <Image className="banner w-100" alt="album3" src={album3} />
          <div className="d-flex mt-3" style={{ alignItems: "center" }}>
            <div>
              <p>Tunnel episode 10</p>
              <p style={{ color: "gray" }}>podcast by Dj Leo</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 my-2">
          <Image className="banner w-100" alt="album4" src={album4} />
          <div className="d-flex mt-3" style={{ alignItems: "center" }}>
            <div>
              <p>Tunnel episode 10</p>
              <p style={{ color: "gray" }}>podcast by Dj Leo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
