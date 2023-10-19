/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProfileFormInputValues = {};
export declare type ProfileFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileFormOverridesProps = {
    ProfileFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type ProfileFormProps = React.PropsWithChildren<{
    overrides?: ProfileFormOverridesProps | undefined | null;
} & {
    initialData?: ProfileFormInputValues;
    onSubmit: (fields: ProfileFormInputValues) => void;
    onChange?: (fields: ProfileFormInputValues) => ProfileFormInputValues;
    onValidate?: ProfileFormValidationValues;
} & React.CSSProperties>;
export default function ProfileForm(props: ProfileFormProps): React.ReactElement;
