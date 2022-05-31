import React, { memo } from "react";

import * as S from "./styles";

import { IInput } from "../../interfaces/inputs.interface";

function GenericInput({ title, value, setValue, placeholder, type }: IInput) {
  return (
    <S.Container>
      <S.Label className="body16">{title}</S.Label>
      <S.Input className="body16" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} type={type} required autoComplete="on" />
    </S.Container>
  );
}

export default memo(GenericInput);
