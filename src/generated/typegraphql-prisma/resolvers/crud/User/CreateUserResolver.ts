import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { CreateUserArgs } from "./args/CreateUserArgs";

@TypeGraphQL.Resolver(_of => User)
export class CreateUserResolver {
    @TypeGraphQL.Mutation(_returns => User, {
        nullable: false,
        description: undefined,
    })
    async createUser(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: CreateUserArgs
    ): Promise<User> {
        return ctx.prisma.user.create(args);
    }
}
