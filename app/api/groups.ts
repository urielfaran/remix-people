import { dbConnect } from "~/api/connect";
import { groupModel } from "~/api/models/group.model";
import { personModel } from "./models/person.model";
import type { Person } from "./people";
import type { ObjectId } from "mongodb";

export type Group = {
    _id: ObjectId;
    name: string;
    parent?: Person;
    child_groups?: Group[];
    people?: Person[];
}
const query = [
    {
        path: 'child_groups',
        model: groupModel
    },
    {
        path: 'people',
        model: personModel
    },
    {
        path: 'parent',
        model: groupModel
    }
];

export async function getAllGroups(name?: string | null) {
    await dbConnect();

    const groups: Group[] = await groupModel.find({}).populate(query);
    return groups.filter(group => (
        name ? group.name.toLowerCase().includes(name.toLowerCase()) : true
    ));
}


export async function getGroupById(id: string) {
    const people = await groupModel.findById(id).populate(query);
    return people;
}