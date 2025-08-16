import api from "./api"; // 위에서 만든 axios 인스턴스

export async function getCabins() {
  try {
    const res = await api.get("/cabins");
    return res.data;
  } catch (err) {
    console.error(err?.response?.data || err.message);
    throw new Error("Cabins could not be loaded.");
  }
}

export async function deleteCabins(id) {
  try {
    const res = await api.delete(`/cabins/${id}`);
    console.log("delete success", res.status);
    return res.data;
  } catch (err) {
    console.log("failed to delete ", err?.response?.data || err.message);
    throw err;
  }
}
