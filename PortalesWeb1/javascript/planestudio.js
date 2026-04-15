const planICC = {
    "codigo": "IF01001",
    "carrera": "Ingeniería en Ciencias de la Computación",
    "bloques": [
        {
            "bloque": "I",
            "asignaturas": [
                { 
                  "codigo": "MT101", 
                  "nombre": "Matemáticas",
                  "creditos": 4, 
                  "requisitos": [] 
                },
                { 
                  "codigo": "ES101", 
                  "nombre": "Español", 
                  "creditos": 3, 
                  "requisitos": [] 
                },
                { 
                    "codigo": "SC101", 
                    "nombre": "Sociología", 
                    "creditos": 3, 
                    "requisitos": [] 
                },
                { 
                    "codigo": "FI101", 
                    "nombre": "Filosofía", 
                    "creditos": 3, 
                    "requisitos": [] 
                },
                { 
                    "codigo": "IF112", 
                    "nombre": "Introducción a CC", 
                    "creditos": 3, 
                    "requisitos": [] 
                }
            ]
        },
        {
            "bloque": "II",
            "asignaturas": [
                { 
                    "codigo": "ES201", 
                    "nombre": "Expresión Oral y Escrita", 
                    "creditos": 3, 
                    "requisitos": ["ES101"] 
                },
                { 
                    "codigo": "MT201", 
                    "nombre": "Pre cálculo", 
                    "creditos": 4, 
                    "requisitos": ["MT101"] 
                },
                { 
                    "codigo": "IF200", 
                    "nombre": "Fundamentos y Lógica de Programación", 
                    "creditos": 4, 
                    "requisitos": ["IF112"] 
                },
                { 
                    "codigo": "HS101", 
                    "nombre": "Historia de Honduras", 
                    "creditos": 3, 
                    "requisitos": [] 
                },
                { 
                    "codigo": "CR201", 
                    "nombre": "El Hombre Frente a la Vida", 
                    "creditos": 3, 
                    "requisitos": [] 
                }
            ]
        },
        {
            "bloque": "III",
            "asignaturas": [
                { 
                    "codigo": "MT301", 
                    "nombre": "Cálculo I", 
                    "creditos": 4, 
                    "requisitos": ["MT201"] 
                },
                { 
                    "codigo": "MT102", 
                    "nombre": "Estadística I", 
                    "creditos": 4, 
                    "requisitos": ["MT101"] 
                },
                { 
                    "codigo": "IF214", 
                    "nombre": "Programación Estructurada I", 
                    "creditos": 3, 
                    "requisitos": ["IF200"] 
                },
                { 
                    "codigo": "IF213", 
                    "nombre": "Estructuras Discretas", 
                    "creditos": 3, 
                    "requisitos": ["IF200"] 
                },
                { 
                    "codigo": "BG205", 
                    "nombre": "Ecología", 
                    "creditos": 3, 
                    "requisitos": [] 
                }
            ]
        },
        {
            "bloque": "IV",
            "asignaturas": [
                { 
                    "codigo": "MT401", 
                    "nombre": "Cálculo II", 
                    "creditos": 4, 
                    "requisitos": ["MT301"] 
                },
                { 
                    "codigo": "IF314", 
                    "nombre": "Programación Estructurada II", 
                    "creditos": 3, 
                    "requisitos": ["IF214"] 
                },
                { 
                    "codigo": "FS101", 
                    "nombre": "Física I", 
                    "creditos": 3, 
                    "requisitos": ["MT301"] 
                },
                { 
                    "codigo": "AD101", 
                    "nombre": "Administración", 
                    "creditos": 3, 
                    "requisitos": [] 
                },
                { 
                    "codigo": "IF212", 
                    "nombre": "Métodos y Técnicas de Investigación", 
                    "creditos": 3, 
                    "requisitos": [] 
                }
            ]
        },
        {
            "bloque": "V",
            "asignaturas": [
                { 
                    "codigo": "IF301", 
                    "nombre": "Base de Datos I", 
                    "creditos": 3, 
                    "requisitos": ["IF213"] 
                },
                { 
                    "codigo": "CT101", 
                    "nombre": "Contabilidad", 
                    "creditos": 3, 
                    "requisitos": ["AD101"] 
                },
                { 
                    "codigo": "IF315", 
                    "nombre": "Prog. en Entornos de Des. Visual", 
                    "creditos": 3, 
                    "requisitos": ["IF314"] 
                },
                { 
                    "codigo": "IF311", 
                    "nombre": "Principios de Electrónica", 
                    "creditos": 3, 
                    "requisitos": ["FS101"] 
                },
                { 
                    "codigo": "MT202", 
                    "nombre": "Matemáticas Financiera", 
                    "creditos": 3, 
                    "requisitos": ["MT102"] 
                }
            ]
        },
        {
            "bloque": "VI",
            "asignaturas": [
                { 
                    "codigo": "IF302", 
                    "nombre": "Base de Datos II", 
                    "creditos": 3, 
                    "requisitos": ["IF301"] 
                },
                { 
                    "codigo": "IF411", 
                    "nombre": "Análisis y Diseño de Sistemas", 
                    "creditos": 3, 
                    "requisitos": ["IF315"] 
                },
                { 
                    "codigo": "IF401", 
                    "nombre": "Redes I", 
                    "creditos": 4, 
                    "requisitos": ["IF314"] 
                },
                { 
                    "codigo": "IF312", 
                    "nombre": "Circuitos Lógicos", 
                    "creditos": 3, 
                    "requisitos": ["IF311"] 
                },
                { 
                    "codigo": "ET101", 
                    "nombre": "Ética Profesional", 
                    "creditos": 3, 
                    "requisitos": ["CR201"] 
                }
            ]
        },
        {
            "bloque": "VII",
            "asignaturas": [
                { 
                    "codigo": "IF402", 
                    "nombre": "Base de Datos Multidimensional", 
                    "creditos": 3, 
                    "requisitos": ["IF302"] 
                },
                { 
                    "codigo": "IF412", 
                    "nombre": "Programación Multiplataforma", 
                    "creditos": 3, 
                    "requisitos": ["IF411"] 
                },
                { 
                    "codigo": "IF413", 
                    "nombre": "Desarrollo de Software", 
                    "creditos": 4, 
                    "requisitos": ["IF411"] 
                },
                { 
                    "codigo": "IF403", 
                    "nombre": "Redes II", 
                    "creditos": 4, 
                    "requisitos": ["IF401"] 
                },
                { 
                    "codigo": "IF404", 
                    "nombre": "Sistemas Automatizados", 
                    "creditos": 3, 
                    "requisitos": ["IF312"] 
                }
            ]
        },
        {
            "bloque": "VIII",
            "asignaturas": [
                { 
                    "codigo": "IF501", 
                    "nombre": "Sistemas Intel. para Negocios", 
                    "creditos": 3, 
                    "requisitos": ["IF402"] 
                },
                { 
                    "codigo": "EL201", 
                    "nombre": "Electiva II (Arte o Deporte)", 
                    "creditos": 3, 
                    "requisitos": [] 
                },
                { 
                    "codigo": "IF414", 
                    "nombre": "Impl. de Sistemas de Software", 
                    "creditos": 3, 
                    "requisitos": ["IF413"] 
                },
                { 
                    "codigo": "IF502", 
                    "nombre": "Sistemas Operativos I", 
                    "creditos": 3, 
                    "requisitos": ["IF403"] 
                },
                { 
                    "codigo": "IF405", 
                    "nombre": "Microcontroladores", 
                    "creditos": 3, 
                    "requisitos": ["IF404"] 
                }
            ]
        },
        {
            "bloque": "IX",
            "asignaturas": [
                { 
                    "codigo": "IF511", 
                    "nombre": "Desarrollo de Portales Web I", 
                    "creditos": 3, 
                    "requisitos": ["IF412"] 
                },
                { 
                    "codigo": "IF512", 
                    "nombre": "Programación Movil I", 
                    "creditos": 3, 
                    "requisitos": ["IF412"] 
                },
                { 
                    "codigo": "IF513", 
                    "nombre": "Gestión de la Calidad Total", 
                    "creditos": 3, 
                    "requisitos": ["IF414"] 
                },
                { 
                    "codigo": "IF503", 
                    "nombre": "Sistemas Operativos II", 
                    "creditos": 3, 
                    "requisitos": ["IF502"] 
                },
                { 
                    "codigo": "IF504", 
                    "nombre": "Sem. de Hardware y Electricidad", 
                    "creditos": 3, 
                    "requisitos": ["IF405"] 
                }
            ]
        },
        {
            "bloque": "X",
            "asignaturas": [
                { 
                    "codigo": "IF514", 
                    "nombre": "Desarrollo de Portales Web II", 
                    "creditos": 3, 
                    "requisitos": ["IF511"] 
                },
                { 
                    "codigo": "IF515", 
                    "nombre": "Programación Movil II", 
                    "creditos": 3, 
                    "requisitos": ["IF512"] 
                },
                { 
                    "codigo": "IF516", 
                    "nombre": "Control Estadístico de la Calidad", 
                    "creditos": 3, 
                    "requisitos": ["IF513"] 
                },
                { 
                    "codigo": "IF505", 
                    "nombre": "Gestión y Estánd. de Tec. de Inf.", 
                    "creditos": 3, 
                    "requisitos": ["IF503"] 
                },
                { 
                    "codigo": "CR301", 
                    "nombre": "Doctrina Social de la Iglesia", 
                    "creditos": 3, 
                    "requisitos": ["ET101"] 
                }
            ]
        },
        {
            "bloque": "XI",
            "asignaturas": [
                { 
                    "codigo": "IF601", 
                    "nombre": "Negocios Web", 
                    "creditos": 3, 
                    "requisitos": ["IF514"] 
                },
                { 
                    "codigo": "IF611", 
                    "nombre": "Programación de Negocios", 
                    "creditos": 3, 
                    "requisitos": ["IF515"] 
                },
                { 
                    "codigo": "IF612", 
                    "nombre": "Plan. y Diseño de Mod. de Calidad", 
                    "creditos": 3, 
                    "requisitos": ["IF516"] 
                },
                { 
                    "codigo": "IF602", 
                    "nombre": "Seg. Inf. y Gestión del Riesgo", 
                    "creditos": 3, 
                    "requisitos": ["IF505"] 
                },
                { 
                    "codigo": "IF603", 
                    "nombre": "Admin. de Centros de Cómputo", 
                    "creditos": 3, 
                    "requisitos": ["IF505"] 
                }
            ]
        },
        {
            "bloque": "XII",
            "asignaturas": [
                { 
                    "codigo": "IF613", 
                    "nombre": "Seminario Taller de Software", 
                    "creditos": 3, 
                    "requisitos": ["IF601"] 
                },
                { 
                    "codigo": "IF614", 
                    "nombre": "Gestión de Proyectos Informáticos", 
                    "creditos": 3, 
                    "requisitos": ["IF611"] 
                },
                { 
                    "codigo": "IF615", 
                    "nombre": "Big Data", 
                    "creditos": 3, 
                    "requisitos": ["IF612"] 
                },
                { 
                    "codigo": "IF604", 
                    "nombre": "Auditoría de Sistemas de Inf.", 
                    "creditos": 3, 
                    "requisitos": ["IF602"] 
                },
                { 
                    "codigo": "EL301", 
                    "nombre": "Electiva III (Área Especializante)", 
                    "creditos": 3, 
                    "requisitos": []
                }    
            ]
        }
    ]
};
document.addEventListener("DOMContentLoaded", () => {
    const flujoGrama = new FlujoGrama("planflujo", planICC);
    flujoGrama.GenerateUX();
});

class FlujoGrama {
    constructor(rootId, plan) {
        this.plan = plan;
        this.root = document.getElementById(rootId);
        this.root.classList.add("plan");
        this.pseudoDom = {};
        this.selected = null;
    }
    GenerateUX() {
        this.createHeader();
        this.createBloques();
    }

    createHeader() {
        let header = document.createElement("H2");
        header.classList.add("plan_header");
        header.innerText = `${this.plan.codigo} - ${this.plan.carrera}`;
        this.root.appendChild(header);
    }
    createBloques() {

        this.plan.bloques.forEach((blq) => {
            let bloque = document.createElement("SECTION");
            bloque.classList.add("plan_bloque");
            let bloqueIndice = document.createElement("DIV");
            let bloqueAsignaturas = document.createElement("DIV");

            bloqueIndice.classList.add("plan_bloque_idx");
            bloqueAsignaturas.classList.add("plan_bloque_asig");

            bloqueIndice.innerText = blq.bloque;

            bloque.appendChild(bloqueIndice);
            bloque.appendChild(bloqueAsignaturas);
            this.createAsignaturas(bloqueAsignaturas, blq);
            this.root.appendChild(bloque);
        });
    }

    createAsignaturas(bloqueDOM, blqDef) {
        blqDef.asignaturas.forEach((asg) => {
            let asignaturaDOM = document.createElement("DIV");
            asignaturaDOM.classList.add("plan_asignatura");
            let codigoDom = document.createElement("DIV");
            codigoDom.innerText = asg.codigo;
            let descripcionDom = document.createElement("DIV");
            descripcionDom.innerText = `${asg.nombre} (${asg.creditos})`;
            asignaturaDOM.appendChild(codigoDom);
            asignaturaDOM.appendChild(descripcionDom);
            bloqueDOM.appendChild(asignaturaDOM);
            // Agregar
            this.pseudoDom[asg.codigo] = {};
            this.pseudoDom[asg.codigo]["nodo"] = asignaturaDOM;
            this.pseudoDom[asg.codigo]["requisitos"] = [];
            this.pseudoDom[asg.codigo]["apertura"] = [];
            asg.requisitos.forEach(rq => {
                this.pseudoDom[asg.codigo]["requisitos"].push(
                    this.pseudoDom[rq].nodo
                );
                this.pseudoDom[rq].apertura.push(
                    this.pseudoDom[asg.codigo].nodo
                );
            });
            this.pseudoDom[asg.codigo]["nodo"].addEventListener(
                "click",
                (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (this.selected) {
                        this.selected.nodo.classList.remove("plan_selected");
                        this.selected.requisitos.forEach(
                            n => n.classList.remove("plan_requisito")
                        );
                        this.selected.apertura.forEach(
                            n => n.classList.remove("plan_apertura")
                        );
                    }
                    this.selected = this.pseudoDom[asg.codigo];
                    this.selected.nodo.classList.add("plan_selected");
                    this.selected.requisitos.forEach(
                        n => n.classList.add("plan_requisito")
                    );
                    this.selected.apertura.forEach(
                        n => n.classList.add("plan_apertura")
                    );
                }
            );
        });
    }
}