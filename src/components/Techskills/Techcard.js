function Techcard({ classname, path, alt, desc }) {
  return (
    <div>
      <div className="tech__card">
        <img className={classname} src={path} alt={alt} />
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Techcard;
