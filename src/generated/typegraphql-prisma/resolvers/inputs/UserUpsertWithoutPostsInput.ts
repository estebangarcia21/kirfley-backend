import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutPostsInput } from "../inputs/UserCreateWithoutPostsInput";
import { UserUpdateWithoutPostsInput } from "../inputs/UserUpdateWithoutPostsInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class UserUpsertWithoutPostsInput {
    @TypeGraphQL.Field(_type => UserUpdateWithoutPostsInput, {
        nullable: false,
        description: undefined,
    })
    update!: UserUpdateWithoutPostsInput;

    @TypeGraphQL.Field(_type => UserCreateWithoutPostsInput, {
        nullable: false,
        description: undefined,
    })
    create!: UserCreateWithoutPostsInput;
}
