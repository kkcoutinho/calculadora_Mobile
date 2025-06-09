```markdown
# Projeto: Testes Automatizados de Calculadora

## Descrição
Este projeto automatiza testes de uma calculadora utilizando **Appium**, **Appium Inspector** **WebDriverIO**, e
**Android Studio**.
Os testes validam operações matemáticas básicas e o funcionamento da aplicação.

## Estrutura do Projeto
```
📂 app  
 └── calculator_8.7 APKPURE.apk *(Arquivo APK da calculadora)*  
📂 teste/specs  
 └── test.e2e.ts *(Script de teste end-to-end)*  
📄 package-lock.json *(Gerenciamento de dependências)*  
📄 package.json *(Configurações e dependências do projeto)*  
📄 tsconfig.json *(Configuração do TypeScript)*  
📄 wdio.conf.ts *(Configuração do WebDriverIO)*
```

## Tecnologias Utilizadas
- **Appium** - Automação de aplicativos móveis  
- **Appium Inspector** - Inspeção de elementos e interações  
- **WebDriverIO** - Execução dos testes automatizados  
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática e melhora a estruturação do código
- **Android Studio** para emulação do ambiente mobile e execução dos testes  

## Como Executar os Testes
1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor do Appium:
   ```sh
   appium
   ```
3. Execute os testes:
   ```sh
   npx wdio
   ```

## Veja o teste rodando 🎥  
Assista ao teste em execução:  
[🔗 Vídeo do teste](https://1drv.ms/v/c/f9b6ddc2788df047/ESks0pBYw5BMvkfXQz2BnjQBkmp0lAV81AEfpuUlkD7iCA?e=LbbD9I)

## Autor(a)
Este projeto foi desenvolvido por **Katia**. 🚀

---

