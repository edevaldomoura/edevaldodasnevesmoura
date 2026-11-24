import { TrailingSlashUrlSerializer } from './trailing-slash-url-serializer';

describe('TrailingSlashUrlSerializer', () => {
  const serializer = new TrailingSlashUrlSerializer();
  const serializar = (url: string) => serializer.serialize(serializer.parse(url));

  it('mantém a raiz como "/"', () => {
    expect(serializar('/')).toBe('/');
  });

  it('acrescenta a barra final às rotas', () => {
    expect(serializar('/sobre')).toBe('/sobre/');
    expect(serializar('/sobre/')).toBe('/sobre/');
  });

  it('preserva query string e fragmento', () => {
    expect(serializar('/sobre?x=1')).toBe('/sobre/?x=1');
    expect(serializar('/contato#form')).toBe('/contato/#form');
  });
});
