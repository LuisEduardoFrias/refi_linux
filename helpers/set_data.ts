
export async function SetData(st: any) {
  const response = await fetch(new URL("http://localhost:3000/api/setting"), 
  {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(st),
  });

  const resp = await response.json();
}

export async function GetData() {
  const response = await fetch(new URL("http://localhost:3000/api/setting"), 
  {
    method: "GET",
    headers: {
     "Content-Type": "application/json",
    }
  });

  const resp = await response.json();
}