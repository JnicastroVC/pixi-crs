// One malicious Pixi Application Test against CRS for CI Pipeline to test the WAF itself
import { Selector } from 'testcafe';

fixture`Getting Started`
    .page `http://localhost/register`;

test('WAF Test with malicious string', async t => {
    await t
        .typeText('input#email', 'test@test>')
        .typeText('input#password', '<script>alert("My evil WAF Test");</script>')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
});
