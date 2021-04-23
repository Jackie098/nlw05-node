import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

/**
 * Fazem o papel de modelo. Quando se utiliza TYPESCRIPT é necessário utilizar
 * os decorators para demarcarcar o que cada linha de código.
 */
@Entity("settings")
class Setting {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  /**
   * Este construtor serve para iniciar um objeto com UUID, no mais, há
   * uma condição já que nem sempre iremos criar um objeto para um novo
   * registro. Assim adicionando um novo ID apenas para novos objetos.
   */
  constructor() {
    //Se o ID for nulo, significa que o registro é novo, logo, adicionamos um
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Setting };
