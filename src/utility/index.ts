/**
 * 웹 페이지 내 모듈용 고유 ID 생성 함수
 * @param length - ID 길이 (기본값: 8자리)
 * @returns 생성된 유니크 ID 문자열
 */
export function generateId(length: number = 8): string {
  const letters: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const randomValues = new Uint32Array(length);
  
  // 브라우저 내장 암호학적 난수 생성 API 사용
  // window 객체가 존재하지 않는 환경(SSR 등)을 대비해 안전하게 방어 코드를 작성할 수도 있습니다.
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(randomValues);
  } else {
    // 엣지 케이스용 대체 난수 (SSR 대응)
    for (let i = 0; i < length; i++) {
      randomValues[i] = Math.floor(Math.random() * 4294967296);
    }
  }
  
  let result: string = '';
  for (let i = 0; i < length; i++) {
    result += letters[randomValues[i] % letters.length];
  }
  
  return result;
}

