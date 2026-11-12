// v1.0.8
//
// 発音レンジ:
//   0～1
//   1022～1023
//
// 停止帯:
//   2～469
//   554～1021
//
// 中央:
//   470～553
//
// その他の仕様はv1.0.7と同じ:
// ・中央120ms滞在後に停止帯へ入ると停止
// ・1.5秒保持でサステイン
// ・短いストロークは約2秒フェード
// ・発音レンジへ再進入で同じ和音でも1音目から再発音
guitarchord.setDelay(150)
guitarchord.assignChord(guitarchord.ChordButton.NoButton, guitarchord.Chord.C)
guitarchord.assignChord(guitarchord.ChordButton.Button1, guitarchord.Chord.G)
