import * as TypeGraphQL from "type-graphql";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyMutationInput } from "../inputs/PostUpdateManyMutationInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class PostUpdateManyWithWhereWithoutCreatorInput {
    @TypeGraphQL.Field((_type) => PostScalarWhereInput, {
        nullable: false,
        description: undefined,
    })
    where!: PostScalarWhereInput;

    @TypeGraphQL.Field((_type) => PostUpdateManyMutationInput, {
        nullable: false,
        description: undefined,
    })
    data!: PostUpdateManyMutationInput;
}