import api from "./api";

export async function getSettings() {
  try {
    const res = await api.get("/settings");
    return res.data;
  } catch (err) {
    console.error(err?.response?.data || err.message);
    throw new Error("Cabins could not be loaded.");
  }
}

export async function updateSetting(newValue) {
  try {
    // const res = await api.put(`/settings/${id}`, data);
    console.log("newValue : ", newValue);
    const res = await api.put(`/settings/1`, newValue);
    return res.data;
  } catch (err) {
    console.log("failed to edit settings", err?.response?.data || err.message);
    throw err;
  }
}

// We expect a newSetting object that looks like {setting: newValue}
// export async function updateSetting(newSetting) {
//   const { data, error } = await supabase
//     .from("settings")
//     .update(newSetting)
//     // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
//     .eq("id", 1)
//     .single();

//   if (error) {
//     console.error(error);
//     throw new Error("Settings could not be updated");
//   }
//   return data;
// }
