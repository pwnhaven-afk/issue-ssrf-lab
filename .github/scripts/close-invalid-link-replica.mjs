// Replica of googleapis/google-api-nodejs-client .github/scripts/close-invalid-link.cjs
// fetch sink: first "http" substring of the issue body, up to end of line.
const body = process.env.ISSUE_BODY || '';
const i = body.indexOf('http');
const nl = body.indexOf('\n', i);
const link = i === -1 ? '' : body.substring(i, nl === -1 ? body.length : nl);
console.log('LINK=' + JSON.stringify(link));
try {
  const r = await fetch(link);
  console.log(`SSRF_FETCH status=${r.status} ok=${r.ok} url=${link}`);
} catch (e) {
  console.log(`SSRF_FETCH_ERROR ${e.message} url=${link}`);
}
