import { Repository, EntityRepository } from "typeorm";

import { Setting } from "../entities/Setting";

/**
 * Cada REPOSITORY, será a ponte entre uma ENTITY (modelo) e o banco de dados,
 * sendo responsável por intermediar e habilitar comandos que manipulam SQL.
 */
@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository };
