export default function IconButton({ link, icon, alt }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={icon}
        alt={alt || "icon"}
        width="32"
        height="32"
        style={{ opacity: 0.8, transition: "opacity 0.3s" }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
        onMouseOut={(e) => (e.currentTarget.style.opacity = 0.8)}
      />
    </a>
  );
}
