export const Description = ({
  brand,
  model,
  price,
  cpu,
  ram,
  os,
  displayResolution,
  battery,
  primaryCamera,
  secondaryCamera,
  displaySize,
  weight,
}) => {
  return (
    <div>
      <h2>Description</h2>
      <ul>
        <li>Brand: {brand}</li>
        <li>Model: {model}</li>
        <li>Price: ${price}</li>
        <li>CPU: {cpu}</li>
        <li>RAM: {ram}</li>
        <li>OS: {os}</li>
        <li>Display Resolution: {displayResolution}</li>
        <li>Battery: {battery}</li>
        {Array.isArray(primaryCamera) ? (
          <li>Primary camera: {primaryCamera?.join(" - ")}</li>
        ) : (
          <li>Primary camera: {primaryCamera}</li>
        )}
        {Array.isArray(secondaryCamera) ? (
          <li>Secondary camera: {secondaryCamera?.join(" - ")}</li>
        ) : (
          <li>Secondary camera: {secondaryCamera}</li>
        )}
        <li>Display size: {displaySize}</li>
        <li>Weight: {weight}</li>
      </ul>
    </div>
  );
};
