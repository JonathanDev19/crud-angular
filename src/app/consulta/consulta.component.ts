import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Solicitud {
  id: number;
  call_made: boolean;
  company_name: string;
  demo_provided: boolean;
  email: string;
  email_sent: boolean;
  message: string;
  phone_number: string;
  public_visit: boolean;
  request_date: string;
  username: string;
  origin: string;
}

@Component({
  selector: 'consulta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {
  solicitudes: Solicitud[] = [
    {
      id: 0,
      call_made: false,
      company_name: 'FollowCar',
      demo_provided: true,
      email: 'gonzamr81@gmail.com',
      email_sent: false,
      message: 'Sin Comentarios',
      phone_number: '9993258671',
      public_visit: false,
      request_date: '2024-10-09T09:25:34',
      username: 'Rodrigo Gonzalez Monter',
      origin: 'App Comer'
    }
  ];

  mostrarFormulario: boolean = false;
  nextId: number = this.solicitudes.length > 0 ? Math.max(...this.solicitudes.map(s => s.id)) + 1 : 1;

  // Objeto temporal para almacenar los datos del formulario
  nuevaSolicitud: Solicitud = {
    id: 0,
    call_made: false,
    company_name: '',
    demo_provided: false,
    email: '',
    email_sent: false,
    message: '',
    phone_number: '',
    public_visit: false,
    request_date: new Date().toISOString(),
    username: '',
    origin: ''
  };

  // Método para agregar una solicitud
  agregarSolicitud() {
    const solicitudConId: Solicitud = {
      ...this.nuevaSolicitud,
      id: this.nextId,
      request_date: new Date().toISOString() // Actualiza la fecha de solicitud al momento actual
    };
    this.solicitudes.push(solicitudConId);
    this.nextId++;
    this.mostrarFormulario = false;

    // Resetea el formulario
    this.nuevaSolicitud = {
      id: 0,
      call_made: false,
      company_name: '',
      demo_provided: false,
      email: '',
      email_sent: false,
      message: '',
      phone_number: '',
      public_visit: false,
      request_date: new Date().toISOString(),
      username: '',
      origin: ''
    };
  }

  // Método para editar una solicitud
  editarSolicitud(id: number) {
    // Implementar la lógica para editar la solicitud según el ID
  }

  // Método para borrar una solicitud
  borrarSolicitud(id: number) {
    this.solicitudes = this.solicitudes.filter(solicitud => solicitud.id !== id);
  }
}
