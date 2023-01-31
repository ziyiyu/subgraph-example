import {
  CreateGravatarCall,
  NewGravatar as NewGravatarEvent,
  UpdatedGravatar as UpdatedGravatarEvent
} from "../generated/templates/GravatarRegistry/GravatarRegistry"
import { Gravatar,Transaction,Block} from "../generated/schema"
import { ethereum } from '@graphprotocol/graph-ts'

export function handleNewGravatar(event: NewGravatarEvent): void {
  let gravatar = new Gravatar(event.params.id.toString()+event.params.groupName);
  gravatar.owner = event.params.owner
  gravatar.groupName = event.params.groupName
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.description = event.params.imageUrl.replaceAll("/"," ");
  gravatar.transaction = event.transaction.hash
  gravatar.save()
}

export function handleUpdatedGravatar(event: UpdatedGravatarEvent): void {
  let id = event.params.id.toString();
  let gravatar = Gravatar.load(id+event.params.groupName)
  if (gravatar == null) {
    gravatar = new Gravatar(id+event.params.groupName)
  }
  gravatar.groupName = event.params.groupName
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.description = event.params.imageUrl.replaceAll("/"," ");
  gravatar.imageUrl = event.params.imageUrl
  gravatar.transaction = event.transaction.hash
  gravatar.save()
}


export function handleCreateGravatar(call: CreateGravatarCall): void {
  let transaction = new Transaction(call.transaction.hash)
  transaction.gasPrice = call.transaction.gasPrice
  transaction.block = call.block.hash
  transaction.save()
}


export function handleBlockWithCallToContract(block: ethereum.Block): void {
  let entity = new Block(block.hash)
  entity.blockNumber = block.number
  entity.blockTimestamp = block.timestamp
  
  entity.save()
}