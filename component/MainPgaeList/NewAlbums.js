export default function Featured() {
  return (
    <div className="my-5 container-sm mx-auto">
      <h1>New Tracks</h1>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 my-2">
          <img className="banner w-100" alt="album1" src="/image/album1.jpg" />
          <div className="d-flex mt-3" style={{ alignItems: "center" }}>
            <div>
              <p>Tunnel episode 10</p>
              <p style={{ color: "gray" }}>podcast by Dj Leo</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 my-2">
          <img className="banner w-100" alt="album2" src="/image/album2.jpg" />
          <div className="d-flex mt-3" style={{ alignItems: "center" }}>
            <div>
              <p>Tunnel episode 10</p>
              <p style={{ color: "gray" }}>podcast by Dj Leo</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 my-2">
          <img className="banner w-100" alt="album3" src="/image/album3.jpg" />
          <div className="d-flex mt-3" style={{ alignItems: "center" }}>
            <div>
              <p>Tunnel episode 10</p>
              <p style={{ color: "gray" }}>podcast by Dj Leo</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 my-2">
          <img className="banner w-100" alt="album4" src="/image/album4.jpg" />
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
