import { Module } from '@nestjs/common';
import { ReservationModule } from './reservation/reservation.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [ReservationModule, MenuModule],
})
export class AppModule {}
