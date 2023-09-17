let listadecontactos = [];

let contacto1 = {
  Id: 1,
  Nombres: "Eduar",
  Apellidos: "Mancilla",
  Teléfono: "3164160740",
  Ubicación: "cali valle ",
  Ciudad: "Cali",
  Dirección: "carrera 35b-avenida ciudad de cali"
};
let contacto2 = {
  Id: 2,
  Nombres: "Miguel",
  Apellidos: "Ojara",
  Teléfono: "3215550460",
  Ubicación: "bogota d.c",
  Ciudad: "bogota",
  Dirección: "carrera 3a norte"
};
let contacto3 = {
  Id: 3,
  Nombres: "Hugo",
  Apellidos: "Williams",
  Teléfono: "3157800102",
  Ubicación: "honduras",
  Ciudad: "sivate",
  Dirección: "calle 6bis carrera13"
};
let contacto4 = {
  Id: 4,
  Nombres: "Juli",
  Apellidos: "Valeria",
  Teléfono: "3215411698",
  Ubicación: "medellin",
  Ciudad: "medellin",
  Dirección: "carrera 5a-calle39"
};

listadecontactos.push(contacto1);
listadecontactos.push(contacto2);
listadecontactos.push(contacto3);
listadecontactos.push(contacto4);

function agregarcontacto(id, nombres, apellidos, telefono, ubicacion, ciudad, direccion) {
  const contacto = {
    Id: id,
    Nombres: nombres,
    Apellidos: apellidos,
    Teléfono: telefono,
    Ubicación: ubicacion,
    Ciudad: ciudad,
    Dirección: direccion
  };
  listadecontactos.push(contacto);
}

function eliminarcontactospornombre(nombrecompleto) {
  for (let i = 0; i < listadecontactos.length; i++) {
    if (
      listadecontactos[i].Nombres + " " + listadecontactos[i].Apellidos === nombrecompleto
    ) {
      listadecontactos.splice(i, 1);
      return;
    }
  }
}

function imprimircontactos() {
  console.log("Lista de Contactos:");
  listadecontactos.forEach(contacto => {
    console.log("Id: " + contacto.Id);
    console.log("Nombres: " + contacto.Nombres);
    console.log("Apellidos: " + contacto.Apellidos);
    console.log("Teléfono: " + contacto.Teléfono);
    console.log("Ubicación: " + contacto.Ubicación);
    console.log("Ciudad: " + contacto.Ciudad);
    console.log("Dirección: " + contacto.Dirección);
    console.log("--------------");
  });
}

// Llama a las funciones
imprimircontactos();
agregarcontacto(5, "Enrrique", "Gomez", "3156987458", "pasto", "pasto", "celle9c#35a");
imprimircontactos();
eliminarcontactospornombre("Miguel Ojara");
imprimircontactos();