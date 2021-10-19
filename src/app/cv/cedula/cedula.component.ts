import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CvService } from 'src/app/services/cv.service';
import { faFemale, faMale} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cedula',
  templateUrl: './cedula.component.html',
  styleUrls: ['./cedula.component.scss']
})
export class CedulaComponent implements OnInit {

  orderForm: FormGroup;
  nameFull: string;
  hombre = faMale;
  mujer = faFemale;

  displayedColumns: string[] = ['idCedula', 'name', 'tipo', 'sexo', 'anioreg', 'titulo', 'desins'];
  dataSource = new MatTableDataSource<any>([]);
  loadTable: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private cvSrv: CvService, private formBuilder: FormBuilder, private paginatorIntl: MatPaginatorIntl) {
    this.paginatorIntl.getRangeLabel = this.rangeLabel;
    this.paginatorIntl.itemsPerPageLabel = `Cédulas por pagina`;
    this.paginatorIntl.nextPageLabel = `Siguiente página`;
    this.paginatorIntl.previousPageLabel = `Página anterior`;
    this.paginatorIntl.firstPageLabel = `Primera página`;
    this.paginatorIntl.lastPageLabel = `Última página`;
  }

  ngOnInit(): void {
    this.formInit();
    this.getCedula();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  formInit(): void {
    this.orderForm = this.formBuilder.group({
      nombre: new FormControl('Luis', [Validators.required]),
      paterno: new FormControl('Acosta', [Validators.required]),
      materno: new FormControl('Tinajero')
    });
  }

  getCedula(): void {
    this.loadTable = true;
    const form = new FormData;
    const {nombre, paterno, materno} = this.orderForm.value;
    this.nameFull = `${nombre} ${paterno} ${materno}`;
    const payload = {
      maxResult:'1000000',
      nombre,
      paterno,
      materno,
      idCedula: ''
    };
    const data = JSON.stringify(payload);
    form.append('json', data);
    this.cvSrv.getCedula(form).subscribe(({items}: any) => {
      const lista = items.map((person: any) => {
        const { anioreg, desins, idCedula, paterno, materno, nombre, sexo, tipo, titulo } = person;
        return {
          anioreg, desins, idCedula, sexo, tipo, titulo, name: `${nombre} ${paterno} ${materno}`
        };
      });
      this.loadTable = false;
      this.dataSource = new MatTableDataSource<any>(lista);
      this.dataSource.paginator = this.paginator;
    });
  }

  rangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0 || pageSize === 0) {
        return `0 de ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex =
        startIndex < length
            ? Math.min(startIndex + pageSize, length)
            : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  }

}
