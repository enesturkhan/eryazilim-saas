import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('test-db')
  async testDB() {
    try {
      const result = await this.prisma.$queryRaw<
        { now: Date }[]
      >`SELECT NOW() as now`;
      const now =
        Array.isArray(result) && result.length > 0 ? result[0].now : result;
      return { ok: true, now };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      return { ok: false, error: message };
    }
  }
}
