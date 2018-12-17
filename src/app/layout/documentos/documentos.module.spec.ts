import { DocumentosModule } from './documentos.module';

describe('DashboardModule', () => {
  let documentosModule: DocumentosModule;

  beforeEach(() => {
    documentosModule = new DocumentosModule();
  });

  it('should create an instance', () => {
    expect(documentosModule).toBeTruthy();
  });
});
