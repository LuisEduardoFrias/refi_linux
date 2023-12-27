
export async function SetData(endpoint: string, st: any) {
  const response = await fetch(new URL("http://localhost:3000/api/"+endpoint), 
  {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(st),
  });

  const resp = await response.json();
}

export async function GetData(endpoint: string) : any {
  const response = await fetch(new URL("http://localhost:3000/api/"+endpoint), {
    method: "GET",
    headers: {
     "Content-Type": "application/json",
    }
  });
  
  
  return await response.json();
}