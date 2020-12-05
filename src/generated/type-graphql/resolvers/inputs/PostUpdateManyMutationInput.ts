import * as TypeGraphQL from "type-graphql";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class PostUpdateManyMutationInput {
    @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined,
    })
    uuid?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined,
    })
    content?: StringFieldUpdateOperationsInput | undefined;
}