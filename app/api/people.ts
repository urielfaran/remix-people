import { dbConnect } from "~/api/connect";
import { personModel } from "~/api/models/person.model";
import type { Group } from "./groups";
import type { ObjectId } from "mongodb";
import { groupModel } from "./models/group.model";

export type Person = {
  _id: ObjectId;
  name: string;
  groups?: Group[];
}

export async function getAllPeople(name?: string | null) {
  await dbConnect();
  let people: Person[] = await personModel.find({}).populate({ path: "groups", model: groupModel });
  if (name == null)
    return people;
  else
    return people.filter(person => (
      name ? person.name.toLowerCase().includes(name.toLowerCase()) : true
    ));
}

export async function getPersonById(id: string) {
  const people = await personModel.findById(id).populate({ path: "groups", model: groupModel });
  return people;
}

export async function deletePerson(id: string) {
  await personModel.findByIdAndDelete(id);
}

export async function createPerson() {
  await personModel.create({});
}