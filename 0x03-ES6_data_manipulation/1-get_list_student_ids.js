export default function getListStudentIds(id) {
  if (Array.isArray(id) !== true) {
    return [];
  }

  return id.map((id) => id.id);
}
