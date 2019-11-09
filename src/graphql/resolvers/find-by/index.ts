import { passwordResolver } from './password.resolver';
import { primaryItemResolver } from './primary-item.resolver';
import { secondaryItemResolver } from './secondary-item.resolver';
import { monsterResolver } from './monster.resolver';
import { bossResolver } from './boss.resolver';

export default {
  Query: {
    password: passwordResolver,
  },
  PasswordResult: {
    primaryItem: primaryItemResolver,
    secondaryItem: secondaryItemResolver,
    monster: monsterResolver,
    boss: bossResolver,
  },
};
