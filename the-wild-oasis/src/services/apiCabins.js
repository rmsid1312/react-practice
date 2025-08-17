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

export async function deleteCabin(id) {
  try {
    const res = await api.delete(`/cabins/${id}`);
    console.log("delete success", res.status);
    return res.data;
  } catch (err) {
    console.log("failed to delete ", err?.response?.data || err.message);
    throw err;
  }
}

export async function createCabin(newCabin) {
  // 1. create cabin
  try {
    const res = await api.post("/cabins", newCabin);
    return res.data;
  } catch (err) {
    console.log("failed to create cabin", err?.response?.data || err.message);
    throw err;
  }

  // 2. upload image
}

export async function updateCabin({ id, ...data }) {
  try {
    const res = await api.put(`/cabins/${id}`, data);
    return res.data;
  } catch (err) {
    console.log("failed to edit cabin", err?.response?.data || err.message);
    throw err;
  }
}
