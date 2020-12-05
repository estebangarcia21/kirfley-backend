import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class PostOrderByInput {
    @TypeGraphQL.Field((_type) => SortOrder, {
        nullable: true,
        description: undefined,
    })
    id?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field((_type) => SortOrder, {
        nullable: true,
        description: undefined,
    })
    uuid?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field((_type) => SortOrder, {
        nullable: true,
        description: undefined,
    })
    content?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field((_type) => SortOrder, {
        nullable: true,
        description: undefined,
    })
    creatorId?: "asc" | "desc" | undefined;
}