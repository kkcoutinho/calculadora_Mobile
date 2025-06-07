import { $ } from '@wdio/globals';

describe('Calculadora Mobile', function () {

    it('Deve somar 4 + 4', async function () {
        await $("xpath://android.widget.ImageButton[@content-desc=\"4\"]").click();
        await $("xpath://android.widget.ImageButton[@content-desc=\"plus\"]").click();
        await $("xpath://android.widget.ImageButton[@content-desc=\"4\"]").click();
        await $("xpath://android.widget.ImageButton[@content-desc=\"equals\"]").click();

        const resultado = await $("xpath://android.widget.TextView[@resource-id=\"com.google.android.calculator:id/result_final\"]").getText();
        console.log(`Resultado da soma: ${resultado}`);
        expect(resultado).toBe("8");
    });

    it('Deve subtrair 9 - 6', async function () {
        await $("xpath://android.widget.ImageButton[@content-desc=\"9\"]").click();
        await $("xpath://android.widget.ImageButton[@content-desc=\"minus\"]").click();
        await $("xpath://android.widget.ImageButton[@content-desc=\"6\"]").click();
        await $("xpath://android.widget.ImageButton[@content-desc=\"equals\"]").click();

        const resultado = await $("xpath://android.widget.TextView[@resource-id=\"com.google.android.calculator:id/result_final\"]").getText();
        console.log(`Resultado da subtração: ${resultado}`);
        expect(resultado).toBe("3");
    });

    it('Deve multiplicar 7 * 1', async function () {
        await $("xpath://android.widget.ImageButton[@content-desc=\"7\"]").click();
        await $("xpath://android.widget.ImageButton[@content-desc=\"multiply\"]").click();
        await $("xpath://android.widget.ImageButton[@content-desc=\"1\"]").click();
        await $("xpath://android.widget.ImageButton[@content-desc=\"equals\"]").click();

        const resultado = await $("xpath://android.widget.TextView[@resource-id=\"com.google.android.calculator:id/result_final\"]").getText();
        console.log(`Resultado da multiplicação: ${resultado}`);
        expect(resultado).toBe("7");
    });

    it('Deve dividir 8 / 2', async function () {
        await $("xpath://android.widget.ImageButton[@content-desc=\"8\"]").click();
        await $("xpath://android.widget.ImageButton[@content-desc=\"divide\"]").click();
        await $("xpath://android.widget.ImageButton[@content-desc=\"2\"]").click();
        await $("xpath://android.widget.ImageButton[@content-desc=\"equals\"]").click();

        const resultado = await $("xpath://android.widget.TextView[@resource-id=\"com.google.android.calculator:id/result_final\"]").getText();
        console.log(`Resultado da divisão: ${resultado}`);
        expect(resultado).toBe("4");
    });

});