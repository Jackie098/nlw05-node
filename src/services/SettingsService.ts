import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async create({ chat, username }: ISettingsCreate) {
    const userAlreadyExists = await this.settingsRepository.findOne({
      username,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    // Criando um objeto de SETTINGS a partir da "ponte" (REPOSITORY)
    const settings = this.settingsRepository.create({
      chat,
      username,
    });

    // Salvando o objeto
    await this.settingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService };
