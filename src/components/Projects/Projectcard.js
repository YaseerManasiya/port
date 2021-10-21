import "./Project.css";
function Projectcard({ path, alternatename, link }) {
  return (
    <div>
      <div className="project_card">
        <a href={link}>
          <img
            className="Image"
            src={path}
            alt={alternatename}
            loading="lazy"
          />
        </a>
        <a href={link}>
          <button
            style={{ marginTop: "20px", marginBottom: "5px" }}
            className="button-18"
          >
            Link
          </button>
        </a>
      </div>
    </div>
  );
}

export default Projectcard;
