export function convertToSerializeableObject(leanDocument) {
  // Handle null or undefined input immediately
  if (leanDocument === null || typeof leanDocument === "undefined") {
    return null;
  }

  // Create a new object to avoid modifying the original leanDocument directly
  // This is good practice even if .lean() provides plain objects
  const serializableObject = { ...leanDocument };

  for (const key of Object.keys(serializableObject)) {
    const value = serializableObject[key];

    // Check if the value is not null or undefined before accessing properties
    if (value !== null && typeof value !== "undefined") {
      // If it's an object and has toJSON/toString methods (like ObjectId or Date)
      if (
        typeof value === "object" &&
        typeof value.toJSON === "function" &&
        typeof value.toString === "function"
      ) {
        serializableObject[key] = value.toString();
      }
      // If it's a nested object (and not an array), recursively convert it
      else if (typeof value === "object" && !Array.isArray(value)) {
        serializableObject[key] = convertToSerializeableObject(value);
      }
      // If it's an array, map over it to convert any objects within
      else if (Array.isArray(value)) {
        serializableObject[key] = value.map((item) =>
          typeof item === "object" && item !== null
            ? convertToSerializeableObject(item)
            : item
        );
      }
    }
  }
  return serializableObject;
}
