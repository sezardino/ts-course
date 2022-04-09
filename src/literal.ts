const fetchWithAuth = (url: string, method: "post" | "get"): 1 | -1 => {
  return 1;
};

fetchWithAuth("s", "get");

const method: string = "get";

fetchWithAuth("w", method as "get");
