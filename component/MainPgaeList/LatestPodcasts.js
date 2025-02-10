import Image from "next/image";
import banner7 from "/public/image/banner7.jpg";
import banner8 from "/public/image/banner8.jpg";
import banner9 from "/public/image/banner9.jpg";
import banner10 from "/public/image/banner10.jpg";
import banner11 from "/public/image/banner11.jpg";
import banner12 from "/public/image/banner12.jpg";
import { BsPlayCircleFill } from "react-icons/bs";
export default function Featured() {
  return (
    <div className="my-5 container-sm mx-auto">
      <h1>Latest podcasts</h1>
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 my-2">
          <Image className="banner w-100" alt="banner7" src={banner7} />
          <div className="d-flex mt-3" style={{ alignItems: "center" }}>
            <div>
              <BsPlayCircleFill
                className="mt-play-track"
                style={{
                  color: "white",
                  cursor: "pointer",
                  marginRight: "5px",
                }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: "gray" }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 my-2">
          <Image className="banner w-100" alt="banner8" src={banner8} />
          <div className="d-flex mt-3" style={{ alignItems: "center" }}>
            <div>
              <BsPlayCircleFill
                className="mt-play-track"
                style={{
                  color: "white",
                  cursor: "pointer",
                  marginRight: "5px",
                }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: "gray" }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 my-2">
          <Image className="banner w-100" alt="banner9" src={banner9} />
          <div className="d-flex mt-3" style={{ alignItems: "center" }}>
            <div>
              <BsPlayCircleFill
                className="mt-play-track"
                style={{
                  color: "white",
                  cursor: "pointer",
                  marginRight: "5px",
                }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: "gray" }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 my-2">
          <Image className="banner w-100" alt="banner10" src={banner10} />
          <div className="d-flex mt-3" style={{ alignItems: "center" }}>
            <div>
              <BsPlayCircleFill
                className="mt-play-track"
                style={{
                  color: "white",
                  cursor: "pointer",
                  marginRight: "5px",
                }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: "gray" }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 my-2">
          <Image className="banner w-100" alt="banner11" src={banner11} />
          <div className="d-flex mt-3" style={{ alignItems: "center" }}>
            <div>
              <BsPlayCircleFill
                className="mt-play-track"
                style={{
                  color: "white",
                  cursor: "pointer",
                  marginRight: "5px",
                }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: "gray" }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 my-2">
          <Image className="banner w-100" alt="banner12" src={banner12} />
          <div className="d-flex mt-3" style={{ alignItems: "center" }}>
            <div>
              <BsPlayCircleFill
                className="mt-play-track"
                style={{
                  color: "white",
                  cursor: "pointer",
                  marginRight: "5px",
                }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: "gray" }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
