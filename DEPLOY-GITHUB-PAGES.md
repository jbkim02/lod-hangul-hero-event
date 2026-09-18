# GitHub Pages 배포 방법

이 폴더의 모든 파일을 GitHub 저장소 하나에 올리면 됩니다.

1. GitHub에서 새 **Public** 저장소를 만듭니다. 예: `darkness-spelling-helper`.
2. 이 폴더 안의 파일 전체를 저장소 최상단에 업로드하고 `Commit changes`를 누릅니다.
3. 저장소의 `Settings > Pages`로 이동합니다.
4. `Build and deployment`에서 `Deploy from a branch`, 브랜치 `main`, 폴더 `/(root)`를 선택하고 저장합니다.
5. 잠시 뒤 표시되는 `https://사용자이름.github.io/darkness-spelling-helper/` 주소를 공유합니다.

## 공용 족보 업데이트

`answers.json`을 수정해 저장소에 올리면 웹사이트를 새로고침한 모든 사용자가 새 문항을 받습니다. 형식은 다음과 같습니다.

```json
{
  "version": "2026.09.19",
  "entries": [
    {
      "question": "문장 [???]",
      "choice1": "1번 선택지",
      "choice2": "2번 선택지",
      "answer": 2,
      "reason": "선택 사항: 근거"
    }
  ]
}
```

개별 사용자가 브라우저에서 직접 저장한 문제는 그 사람의 브라우저에만 저장됩니다. 공용 족보에 반영하려면 검토한 뒤 `answers.json`에 추가하세요.
